/**
 * Interface localization.
 *
 * The app is Russian-first (DEFAULT_LANG = 'ru'). English strings are kept as the
 * fallback source, so a missing translation can never produce an empty label and
 * switching to `en` still gives a fully working interface.
 *
 * Aspects are deliberately NOT translated -- they keep their original Latin names
 * (Aer, Terra, Praecantatio, ...). Only research names have two language versions
 * (see src/data/gtnhResearch.js).
 */

export const DEFAULT_LANG = 'ru';
export const SUPPORTED_LANGS = ['ru', 'en'];

const STORAGE_KEY = 'thaumcraft_researcher_lang';

const translations = {
    en: {
        'app.title': 'Thaumcraft 4 Research Solver',
        'aspectLibrary': 'Aspect Library',
        'btn.research': 'Research!',
        'btn.reset': 'Reset Changes',
        'btn.resetHexes': 'Reset Hexes',
        'label.loadResearch': 'Load GTNH Research:',
        'placeholder.researchSearch': 'Search research name...',
        'label.gridSize': 'Grid Size:',
        'grid.small': 'Small (3)',
        'grid.standard': 'Standard (4)',
        'grid.large': 'Large (5)',
        'grid.xl': 'Extra Large (6)',
        'mod.gtnh': 'GregTech New Horizons Aspects',
        'placeholder.aspectSearch': 'Search aspects...',
        'label.compactMode': 'Hide Aspect Details',
        'custom.title': 'Add Custom Aspect',
        'custom.namePlaceholder': 'Name',
        'custom.parent1': 'Parent 1',
        'custom.parent2': 'Parent 2',
        'custom.add': 'Add',
        'howto.title': 'How to Use',
        'howto.1': '<strong>1. Place Aspects:</strong> Drag aspects from the library onto empty hexes to set endpoints. <em>Mobile: tap an aspect, then tap a hex.</em>',
        'howto.2': '<strong>2. Add/Remove Gaps:</strong> Right-click an empty hex to toggle it as a void. <em>Mobile: tap an empty hex with nothing selected.</em>',
        'howto.3': '<strong>3. Use More:</strong> Check "Use More" under an aspect to make the algorithm prefer using it.',
        'howto.4': '<strong>4. Enable/Disable:</strong> Uncheck an aspect to exclude it from the solve.',
        'howto.5': '<strong>5. Solve:</strong> Click "Research!" to automatically find the shortest parent-child path connecting your placed aspects. Don\'t like the layout? Click it again for a different valid pattern.',
        'howto.6': '<strong>6. Edit Formulas:</strong> Click the ⚙️ icon next to a compound aspect to edit its parents.',
        'howto.7': '<strong>7. Reset Hexes:</strong> Clears all placed aspects and gaps from the grid.',
        'howto.8': '<strong>8. Reset Changes:</strong> Clears custom aspects, enabled/disabled aspects, and grid size back to defaults.',
        'howto.note': '<strong>Note:</strong> With many endpoints, the solver can sometimes route through the same aspect via two separate branches instead of merging them into one shared path -- a known quirk that doesn\'t affect correctness. Not every GTNH research may be listed in the picker -- it covers everything I could find. This project is open source -- <a href="https://github.com/exaltedo2/ThaumcraftResearcher" target="_blank" rel="noopener noreferrer">check it out on GitHub</a>.',
        'lang.label': 'Language:',
        'category.primals': 'Primals',
        'category.baseGame': 'Base Game',
        'category.gtnh': 'GregTech New Horizons Aspects',
        'category.custom': 'Custom Aspects',
        'aspects': 'aspects',
        'formula.primal': '(Primal)',
        'title.enableToggle': 'Enable/Disable',
        'title.deleteCustom': 'Delete Custom Aspect',
        'title.editFormula': 'Edit Formula',
        'title.useMore': 'Prefer using this aspect when solving',
        'label.useMore': 'Use More',
        'modal.editTitle': 'Edit',
        'meta.aspectCount': '{count} aspects',
        'btn.cancel': 'Cancel',
        'btn.save': 'Save',
        'sidebar.toggle': 'Toggle How to Use',
        'confirm.reset': 'Reset all changes? This will clear custom aspects, enabled/disabled aspects, and grid size back to defaults.',
        'confirm.deleteCustom': 'Are you sure you want to delete the custom aspect "{name}"?',
        'alert.noPath': 'No valid path could be found to connect all endpoints with the currently enabled aspects!',
        'alert.fillFields': 'Please fill all fields to add a custom aspect.',
        'alert.badName': 'Aspect name must contain at least one alphanumeric character.',
        'alert.duplicateName': 'An aspect with this name already exists.',
        'research.empty': 'No matching research found.',
    },
    ru: {
        'app.title': 'Решатель исследований Thaumcraft 4',
        'aspectLibrary': 'Библиотека аспектов',
        'btn.research': 'Исследовать!',
        'btn.reset': 'Сбросить изменения',
        'btn.resetHexes': 'Очистить соты',
        'label.loadResearch': 'Загрузить исследование GTNH:',
        'placeholder.researchSearch': 'Поиск названия исследования...',
        'label.gridSize': 'Размер сетки:',
        'grid.small': 'Малый (3)',
        'grid.standard': 'Стандартный (4)',
        'grid.large': 'Большой (5)',
        'grid.xl': 'Очень большой (6)',
        'mod.gtnh': 'Аспекты GregTech New Horizons',
        'placeholder.aspectSearch': 'Поиск аспектов...',
        'label.compactMode': 'Скрыть подробности аспектов',
        'custom.title': 'Добавить свой аспект',
        'custom.namePlaceholder': 'Название',
        'custom.parent1': 'Родитель 1',
        'custom.parent2': 'Родитель 2',
        'custom.add': 'Добавить',
        'howto.title': 'Как пользоваться',
        'howto.1': '<strong>1. Разместите аспекты:</strong> перетащите аспекты из библиотеки на пустые соты, чтобы задать концы цепочки. <em>На телефоне: нажмите на аспект, затем на соту.</em>',
        'howto.2': '<strong>2. Добавьте/уберите пропуски:</strong> нажмите правой кнопкой на пустую соту, чтобы превратить её в разрыв. <em>На телефоне: нажмите на пустую соту, когда ничего не выбрано.</em>',
        'howto.3': '<strong>3. «Использовать чаще»:</strong> отметьте этот пункт под аспектом, чтобы алгоритм предпочитал именно его.',
        'howto.4': '<strong>4. Включение/выключение:</strong> снимите галочку с аспекта, чтобы исключить его из решения.',
        'howto.5': '<strong>5. Решение:</strong> нажмите «Исследовать!», чтобы автоматически найти кратчайшую цепочку «родитель — потомок», соединяющую размещённые аспекты. Не нравится раскладка? Нажмите ещё раз — будет найден другой корректный вариант.',
        'howto.6': '<strong>6. Изменение формул:</strong> нажмите значок ⚙️ рядом с составным аспектом, чтобы изменить его родителей.',
        'howto.7': '<strong>7. Очистить соты:</strong> убирает все размещённые аспекты и пропуски с сетки.',
        'howto.8': '<strong>8. Сбросить изменения:</strong> возвращает свои аспекты, включённые/выключенные аспекты и размер сетки к значениям по умолчанию.',
        'howto.note': '<strong>Примечание:</strong> при большом количестве концов решатель иногда проводит две отдельные ветви через один и тот же аспект вместо объединения их в одну общую цепочку — это известная особенность, не влияющая на корректность. Не все исследования GTNH могут оказаться в списке — в него вошло всё, что удалось найти. Проект с открытым исходным кодом — <a href="https://github.com/exaltedo2/ThaumcraftResearcher" target="_blank" rel="noopener noreferrer">смотрите его на GitHub</a>.',
        'lang.label': 'Язык:',
        'category.primals': 'Первичные аспекты',
        'category.baseGame': 'Базовая игра',
        'category.gtnh': 'Аспекты GregTech New Horizons',
        'category.custom': 'Свои аспекты',
        'aspects': 'аспектов',
        'formula.primal': '(первичный)',
        'title.enableToggle': 'Включить/выключить',
        'title.deleteCustom': 'Удалить свой аспект',
        'title.editFormula': 'Изменить формулу',
        'title.useMore': 'Предпочитать этот аспект при решении',
        'label.useMore': 'Использовать чаще',
        'modal.editTitle': 'Изменить',
        'meta.aspectCount': '{count} аспект(ов)',
        'btn.cancel': 'Отмена',
        'btn.save': 'Сохранить',
        'sidebar.toggle': 'Показать/скрыть инструкцию',
        'confirm.reset': 'Сбросить все изменения? Свои аспекты, включённые/выключенные аспекты и размер сетки вернутся к значениям по умолчанию.',
        'confirm.deleteCustom': 'Вы уверены, что хотите удалить свой аспект «{name}»?',
        'alert.noPath': 'Не удалось найти корректную цепочку, соединяющую все концы из включённых сейчас аспектов!',
        'alert.fillFields': 'Заполните все поля, чтобы добавить свой аспект.',
        'alert.badName': 'Название аспекта должно содержать хотя бы один буквенно-цифровой символ.',
        'alert.duplicateName': 'Аспект с таким названием уже существует.',
        'research.empty': 'Подходящих исследований не найдено.',
    },
};

let currentLang = (() => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    } catch (e) { /* localStorage unavailable */ }
    return DEFAULT_LANG;
})();

export function getLang() {
    return currentLang;
}

export function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
}

/**
 * Translate a key, interpolating `{placeholders}` from `params`.
 * Falls back to English, then to the key itself, so nothing ever renders empty.
 */
export function t(key, params) {
    let str = translations[currentLang]?.[key];
    if (str === undefined) str = translations.en[key];
    if (str === undefined) return key;
    if (params) {
        for (const [k, v] of Object.entries(params)) {
            str = str.split(`{${k}}`).join(String(v));
        }
    }
    return str;
}

export function translateHtml(container, root) {
    if (!container) return;
    const scope = root || container;
    scope.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = t(el.getAttribute('data-i18n'));
    });
    scope.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    scope.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
}
