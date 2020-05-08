import path from 'path';
import { languages, Language } from './languages';

type Mapping = Record<string, string>;

function generateMapping(langToKeys: (id: string, lang: Language) => string[]) {
  return Object.entries<Language>(languages).reduce<Mapping>(
    (prev, current) => {
      const [id, lang] = current;
      const currentMap = langToKeys(id, lang).reduce<Mapping>(
        (innerPrev, innerCurrent) => {
          return { ...innerPrev, [innerCurrent]: id };
        },
        {},
      );

      return { ...prev, ...currentMap };
    },
    {},
  );
}

// Map from id and aliases to code.
export const aliasToId = generateMapping((id, lang) =>
  [id].concat(lang.aliases || []),
);

// Map from extensions to code.
export const extensionToId = generateMapping(
  (_, lang) => lang.extensions || [],
);

// Map from filenames to code.
export const filenameToId = generateMapping((_, lang) => lang.filenames || []);

export function getValidId(input: string) {
  return aliasToId[input.toLowerCase()] || 'text';
}

export function getIdFromFilename(input: string) {
  for (const [extension, code] of Object.entries(extensionToId)) {
    if (input.endsWith(extension)) return code;
  }

  for (const [filename, code] of Object.entries(filenameToId)) {
    if (input.match(filename)) return code;
  }

  return 'text';
}

export function getHighlightFromId(code: string) {
  return languages[code].highlight || code;
}
