/**
 * Aspect definitions.
 *
 * Aspects are intentionally kept in their original (Latin) names: `name` is the canonical,
 * language-independent label used everywhere in the UI, while `nameRu` carries a Russian
 * gloss for the aspects that have one. Aspects without a translation simply show their
 * original name.
 */

export const primalAspects = [
    { id: 'aer', name: 'Aer', isPrimal: true, tier: 1, color: '#ffff7e', nameRu: 'Воздух' },
    { id: 'terra', name: 'Terra', isPrimal: true, tier: 1, color: '#56c000', nameRu: 'Земля' },
    { id: 'ignis', name: 'Ignis', isPrimal: true, tier: 1, color: '#ff5a01', nameRu: 'Огонь' },
    { id: 'aqua', name: 'Aqua', isPrimal: true, tier: 1, color: '#3cd4fc', nameRu: 'Вода' },
    { id: 'ordo', name: 'Ordo', isPrimal: true, tier: 1, color: '#d5d4ec', nameRu: 'Порядок' },
    { id: 'perditio', name: 'Perditio', isPrimal: true, tier: 1, color: '#404040', nameRu: 'Разрушение' },
];

export const standardCompounds = [
    { id: 'vacuos', name: 'Vacuos', components: ['aer', 'perditio'], color: '#888888', nameRu: 'Пустота' },
    { id: 'lux', name: 'Lux', components: ['aer', 'ignis'], color: '#fff663', nameRu: 'Свет' },
    { id: 'motus', name: 'Motus', components: ['aer', 'ordo'], color: '#cdccf4', nameRu: 'Движение' },
    { id: 'gelum', name: 'Gelum', components: ['ignis', 'perditio'], color: '#e1ffff', nameRu: 'Лёд' },
    { id: 'vitreus', name: 'Vitreus', components: ['terra', 'ordo'], color: '#80ffff', nameRu: 'Стекло' },
    { id: 'victus', name: 'Victus', components: ['aqua', 'terra'], color: '#de0005', nameRu: 'Жизнь' },
    { id: 'venenum', name: 'Venenum', components: ['aqua', 'perditio'], color: '#89f000', nameRu: 'Яд' },
    { id: 'potentia', name: 'Potentia', components: ['ordo', 'ignis'], color: '#c0ffff', nameRu: 'Энергия' },
    { id: 'permutatio', name: 'Permutatio', components: ['perditio', 'ordo'], color: '#578357', nameRu: 'Изменение' },
    
    { id: 'metallum', name: 'Metallum', components: ['terra', 'vitreus'], color: '#b5b5cd', nameRu: 'Металл' },
    { id: 'mortuus', name: 'Mortuus', components: ['victus', 'perditio'], color: '#887788', nameRu: 'Смерть' },
    { id: 'fames', name: 'Fames', components: ['vacuos', 'victus'], color: '#9a0305', nameRu: 'Голод' },
    { id: 'volatus', name: 'Volatus', components: ['aer', 'motus'], color: '#e7e7d7', nameRu: 'Полёт' },
    { id: 'tenebrae', name: 'Tenebrae', components: ['vacuos', 'lux'], color: '#222222', nameRu: 'Тьма' },
    { id: 'spiritus', name: 'Spiritus', components: ['victus', 'mortuus'], color: '#ebebfb', nameRu: 'Дух' },
    { id: 'sano', name: 'Sano', components: ['victus', 'ordo'], color: '#ff2f34', nameRu: 'Здоровье' },
    { id: 'bestia', name: 'Bestia', components: ['motus', 'victus'], color: '#9f6409', nameRu: 'Зверь' },
    { id: 'corpus', name: 'Corpus', components: ['mortuus', 'bestia'], color: '#ee478d', nameRu: 'Тело' },
    { id: 'herba', name: 'Herba', components: ['victus', 'terra'], color: '#01ac00', nameRu: 'Растение' },
    { id: 'arbor', name: 'Arbor', components: ['aer', 'herba'], color: '#876531', nameRu: 'Дерево' },
    { id: 'machina', name: 'Machina', components: ['motus', 'instrumentum'], color: '#8080a0', nameRu: 'Механизм' },
    { id: 'alienis', name: 'Alienis', components: ['vacuos', 'tenebrae'], color: '#805080', nameRu: 'Иное' },
    { id: 'cognitio', name: 'Cognitio', components: ['ignis', 'spiritus'], color: '#ffc2b3', nameRu: 'Мысль' },
    { id: 'sensus', name: 'Sensus', components: ['aer', 'spiritus'], color: '#0fd9ff', nameRu: 'Чувство' },
    { id: 'humanus', name: 'Humanus', components: ['bestia', 'cognitio'], color: '#ffd7c0', nameRu: 'Человек' },
    { id: 'instrumentum', name: 'Instrumentum', components: ['humanus', 'ordo'], color: '#4040ee', nameRu: 'Инструмент' },
    { id: 'lucrum', name: 'Lucrum', components: ['humanus', 'fames'], color: '#e6be44', nameRu: 'Нажива' },
    { id: 'messis', name: 'Messis', components: ['herba', 'humanus'], color: '#e1b371', nameRu: 'Урожай' },
    { id: 'perfodio', name: 'Perfodio', components: ['humanus', 'terra'], color: '#dcd2d8', nameRu: 'Копание' },
    { id: 'fabrico', name: 'Fabrico', components: ['humanus', 'instrumentum'], color: '#809d80', nameRu: 'Ремесло' },
    { id: 'pannus', name: 'Pannus', components: ['instrumentum', 'bestia'], color: '#eaeac2', nameRu: 'Ткань' },
    { id: 'tutamen', name: 'Tutamen', components: ['instrumentum', 'terra'], color: '#00c0c0', nameRu: 'Защита' },
    { id: 'telum', name: 'Telum', components: ['instrumentum', 'ignis'], color: '#c05050', nameRu: 'Оружие' },
    { id: 'praecantatio', name: 'Praecantatio', components: ['vacuos', 'potentia'], color: '#9700c0', nameRu: 'Заклинание' },
    { id: 'vitium', name: 'Vitium', components: ['praecantatio', 'perditio'], color: '#800080', nameRu: 'Порча' },
    { id: 'auram', name: 'Auram', components: ['praecantatio', 'aer'], color: '#ffc0ff', nameRu: 'Аура' },

    { id: 'vinculum', name: 'Vinculum', components: ['motus', 'perditio'], color: '#9a8080', nameRu: 'Оковы' },
    { id: 'limus', name: 'Limus', components: ['victus', 'aqua'], color: '#01f800', nameRu: 'Слизь' },

    { id: 'iter', name: 'Iter', components: ['motus', 'terra'], color: '#e0585b', nameRu: 'Странствие' },
    { id: 'exanimis', name: 'Exanimis', components: ['motus', 'mortuus'], color: '#3a4000', nameRu: 'Бездна' },
    { id: 'meto', name: 'Meto', components: ['instrumentum', 'messis'], color: '#eead82', nameRu: 'Жатва' },
    { id: 'tempestas', name: 'Tempestas', components: ['aer', 'aqua'], color: '#ffffff', nameRu: 'Шторм' },
];

export const modAspects = {
    gtnh: [
        { id: 'electrum', name: 'Electrum', components: ['potentia', 'machina'], color: '#c0eeee', nameRu: 'Электрум' },
        { id: 'magneto', name: 'Magneto', components: ['metallum', 'iter'], color: '#c0c0c0', nameRu: 'Магнетизм' },
        { id: 'aequalitas', name: 'Aequalitas', components: ['cognitio', 'ordo'], color: '#eef0ea', nameRu: 'Равновесие' },
        { id: 'vesania', name: 'Vesania', components: ['cognitio', 'vitium'], color: '#1b122c', nameRu: 'Безумие' },
        { id: 'primordium', name: 'Primordium', components: ['vacuos', 'motus'], color: '#f7f7db', nameRu: 'Начало' },
        { id: 'astrum', name: 'Astrum', components: ['lux', 'primordium'], color: '#2d2c2b', nameRu: 'Звёзды' },
        { id: 'gloria', name: 'Gloria', components: ['humanus', 'iter'], color: '#ffe980', nameRu: 'Слава' },
        { id: 'nebrisum', name: 'Nebrisum', components: ['lucrum', 'perfodio'], color: '#eeee7e', nameRu: 'Нефрит' },
        { id: 'radio', name: 'Radio', components: ['potentia', 'lux'], color: '#c0ffc0', nameRu: 'Радиация' },
        { id: 'strontio', name: 'Strontio', components: ['perditio', 'cognitio'], color: '#eec2b3', nameRu: 'Стронций' },
        { id: 'tempus', name: 'Tempus', components: ['vacuos', 'ordo'], color: '#b68cff', nameRu: 'Время' },
        { id: 'infernus', name: 'Infernus', components: ['ignis', 'praecantatio'], color: '#ff0000', nameRu: 'Ад' },
        { id: 'luxuria', name: 'Luxuria', components: ['corpus', 'fames'], color: '#ffc1ce', nameRu: 'Похоть' },
        { id: 'desidia', name: 'Desidia', components: ['vinculum', 'spiritus'], color: '#6e6e6e', nameRu: 'Лень' },
        { id: 'superbia', name: 'Superbia', components: ['volatus', 'vacuos'], color: '#9639ff', nameRu: 'Гордыня' },
        { id: 'invidia', name: 'Invidia', components: ['sensus', 'fames'], color: '#00ba00', nameRu: 'Зависть' },
        { id: 'ira', name: 'Ira', components: ['telum', 'ignis'], color: '#870404', nameRu: 'Гнев' },
        { id: 'gula', name: 'Gula', components: ['fames', 'vacuos'], color: '#d59c46', nameRu: 'Обжорство' },
        { id: 'caelum', name: 'Caelum', components: ['vitreus', 'metallum'], color: '#5e74cf', nameRu: 'Небеса' },
        { id: 'tabernus', name: 'Tabernus', components: ['tutamen', 'iter'], color: '#4c8569', nameRu: 'Небо' },
        { id: 'terminus', name: 'Terminus', components: ['lucrum', 'alienis'], color: '#b90000', nameRu: 'Предел' }
    ]
};

export class AspectDatabase {
    constructor() {
        this.aspects = new Map();
        this.enabledAspects = new Set();
        this.useMoreAspects = new Set();
        this.loadBaseAspects();
    }

    loadBaseAspects() {
        primalAspects.forEach(a => this.addAspect(a.id, a.name, [], true, false, true, a.color, a.nameRu));
        standardCompounds.forEach(a => this.addAspect(a.id, a.name, a.components, false, false, true, a.color, a.nameRu));
        
        for (const [modName, aspects] of Object.entries(modAspects)) {
            aspects.forEach(a => {
                this.addAspect(a.id, a.name, a.components, false, true, false, a.color, a.nameRu);
                this.aspects.get(a.id).modName = modName; 
            });
        }
    }

    addAspect(id, name, components = [], isPrimal = false, isMod = false, defaultEnabled = true, color = '#ffffff', nameRu = null) {
        if (!this.aspects.has(id)) {
            this.aspects.set(id, { id, name, nameRu, components, isPrimal, isMod, tier: 1, color });
            if (defaultEnabled) {
                this.enabledAspects.add(id);
            }
        }
    }

    toggleAspect(id, enabled) {
        if (enabled) {
            this.enabledAspects.add(id);
        } else {
            this.enabledAspects.delete(id);
        }
    }

    toggleUseMore(id, useMore) {
        if (useMore) {
            this.useMoreAspects.add(id);
        } else {
            this.useMoreAspects.delete(id);
        }
    }

    getEnabledAspects() {
        return Array.from(this.aspects.values()).filter(a => this.enabledAspects.has(a.id));
    }

    getAspect(id) {
        return this.aspects.get(id);
    }

    /**
     * Aspect name as it should be displayed. Aspects keep their original (Latin)
     * names; `nameRu` is only an optional gloss used for Russian search queries.
     */
    getDisplayName(id, lang = 'ru') {
        const a = this.aspects.get(id);
        if (!a) return id;
        return a.name;
    }

    /**
     * Whether an aspect matches a search query. The query is matched against the
     * original aspect name and -- when in Russian mode -- also against its `nameRu`
     * gloss, so typing "вода" still finds Aqua.
     */
    matchesQuery(aspect, query, lang = 'ru') {
        const q = String(query || '').trim().toLowerCase();
        if (!q) return true;
        if (aspect.name.toLowerCase().includes(q)) return true;
        if (aspect.id.toLowerCase().includes(q)) return true;
        if (lang !== 'en' && aspect.nameRu && aspect.nameRu.toLowerCase().includes(q)) return true;
        return false;
    }
}
