import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getPages(query) {
  await fakeNetwork(`getPages:${query}`);
  let Pages = await localforage.getItem("Pages");
  if (!Pages) Pages = [];
  if (query) {
    Pages = matchSorter(Pages, query, { keys: ["first", "last"] });
  }
  return Pages.sort(sortBy("last", "createdAt"));
}

export async function createpages() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let pages = { id, createdAt: Date.now() };
  let Pages = await getPages();
  Pages.unshift(pages);
  await set(Pages);
  return pages;
}

export async function getpages(id) {
  await fakeNetwork(`pages:${id}`);
  let Pages = await localforage.getItem("Pages");
  let pages = Pages.find(pages => pages.id === id);
  return pages ?? null;
}

export async function updatepages(id, updates) {
  await fakeNetwork();
  let Pages = await localforage.getItem("Pages");
  let pages = Pages.find(pages => pages.id === id);
  if (!pages) throw new Error("No pages found for", id);
  Object.assign(pages, updates);
  await set(Pages);
  return pages;
}

export async function deletepages(id) {
  let Pages = await localforage.getItem("Pages");
  let index = Pages.findIndex(pages => pages.id === id);
  if (index > -1) {
    Pages.splice(index, 1);
    await set(Pages);
    return true;
  }
  return false;
}

function set(Pages) {
  return localforage.setItem("Pages", Pages);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}