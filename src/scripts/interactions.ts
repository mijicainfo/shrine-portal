const FAVORITES_KEY = 'shrine-portal:favorites';
const VISITED_KEY = 'shrine-portal:visited';

function getList(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function setList(key: string, list: string[]) {
  localStorage.setItem(key, JSON.stringify(list));
}

function toggle(key: string, id: string): boolean {
  const list = getList(key);
  const index = list.indexOf(id);
  if (index === -1) {
    list.push(id);
  } else {
    list.splice(index, 1);
  }
  setList(key, list);
  return list.includes(id);
}

function applyState(btn: HTMLElement, active: boolean) {
  btn.setAttribute('aria-pressed', String(active));
  btn.classList.toggle('is-active', active);
  const label = btn.querySelector('[data-label]');
  const activeText = btn.dataset.labelActive;
  const inactiveText = btn.dataset.labelInactive;
  if (label && activeText && inactiveText) {
    label.textContent = active ? activeText : inactiveText;
  }
}

function initButtons(selector: string, key: string) {
  const list = getList(key);
  document.querySelectorAll<HTMLElement>(selector).forEach((btn) => {
    const id = btn.dataset.shrineId;
    if (!id) return;
    applyState(btn, list.includes(id));
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const active = toggle(key, id);
      document
        .querySelectorAll<HTMLElement>(`${selector}[data-shrine-id="${id}"]`)
        .forEach((match) => applyState(match, active));
    });
  });
}

initButtons('[data-favorite-btn]', FAVORITES_KEY);
initButtons('[data-visited-btn]', VISITED_KEY);
