/* Browser persistence with visible failure and preservation of damaged records. */
function createStoryQStorage(getStorage) {
  let warning = '';
  let failed = false;
  const aliases = new Map();
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  function read(key, fallback = null) {
    try { return getStorage().getItem(aliases.get(key) || key) ?? fallback; }
    catch { failed = true; return fallback; }
  }
  function readObject(key) {
    const raw = read(key);
    if (raw === null) return {};
    try {
      const parsed = JSON.parse(raw);
      if (!object(parsed)) throw new Error('Invalid record');
      return parsed;
    } catch {
      // Never overwrite the unreadable original. Subsequent work uses a sibling key.
      aliases.set(key, key + ':recovery');
      warning = 'Un registro anterior no se pudo leer. Se conserva intacto; el trabajo nuevo se guarda por separado. Descarga una copia de respaldo.';
      const recovered = read(key);
      if (recovered !== null) {
        try { const parsed = JSON.parse(recovered); if (object(parsed)) return parsed; } catch {}
      }
      return {};
    }
  }
  function write(key, value) {
    try {
      const storage = getStorage();
      const actualKey = aliases.get(key) || key;
      storage.setItem(actualKey, value);
      if (storage.getItem(actualKey) !== value) throw new Error('Write not retained');
      return true;
    } catch { failed = true; return false; }
  }
  function remove(key) {
    try { getStorage().removeItem(aliases.get(key) || key); return true; }
    catch { failed = true; return false; }
  }
  function saveRecord(data) {
    failed = false;
    return write('storyqRouteStore', JSON.stringify(data));
  }
  return { read, readObject, write, remove, saveRecord, get warning() { return warning; }, get failed() { return failed; } };
}
if (typeof module !== 'undefined') module.exports = { createStoryQStorage };
