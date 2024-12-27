"use server";

import { client } from "node-shikimori";

const shikimori = client();

export const getOngoingAnimes = async () => {
  const query = `
  query {
    animes(limit: 28, status: "ongoing", order: ranked) {
    name
    poster { id originalUrl mainUrl }
    id
    url
    name
    russian
    studios { name }
  }
  }
  `;
  const headers = { "Content-Type": "application/json" };

  const res = await fetch("https://shikimori.one/api/graphql", {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
  });
  return await res.json();
};

export const getAnimes = async () => {
  const query = `
  query {
    animes(limit: 28, order: ranked) {
    name
    poster { id originalUrl mainUrl }
    id
    url
    name
    russian
    studios { name }
  }
  }
  `;
  const headers = { "Content-Type": "application/json" };

  const res = await fetch("https://shikimori.one/api/graphql", {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
  });
  return await res.json();
};

export const getAnime = async (value: string) => {
  const headers = { "Content-Type": "application/json" };

  const query = `
   query {
      animes(ids: "${value}") {
        id
        id
    malId
    name
    russian
    licenseNameRu
    english
    japanese
    synonyms
    kind
    rating
    score
    status
    episodes
    episodesAired
    duration
    airedOn { year month day date }
    releasedOn { year month day date }
    url
    season

    poster { id originalUrl mainUrl }

    fansubbers
    fandubbers
    licensors
    createdAt,
    updatedAt,
    nextEpisodeAt,
    isCensored

    genres { id name russian kind }
    studios { id name imageUrl }

    externalLinks {
      id
      kind
      url
      createdAt
      updatedAt
    }

    personRoles {
      id
      rolesRu
      rolesEn
      person { id name poster { id } }
    }
    characterRoles {
      id
      rolesRu
      rolesEn
      character { id name poster { id } }
    }

    related {
      id
      anime {
        id
        name
      }
      manga {
        id
        name
      }
      relationKind
      relationText
    }

    videos { id url name kind playerUrl imageUrl }
    screenshots { id originalUrl x166Url x332Url }

    scoresStats { score count }
    statusesStats { status count }

    description
    descriptionHtml
    descriptionSource
      }
    }
  `;

  const res = await fetch("https://shikimori.one/api/graphql", {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
  });
  return await res.json();
};

export const searchAnimes = async (name: string) => {
  const query = `

  query {
    animes(search: "${name}", limit: 50) {
    name
    poster { id originalUrl mainUrl }
    id
    url
    name
    russian
    studios { name }
  }
  }
  `;
  const headers = { "Content-Type": "application/json" };

  const res = await fetch("https://shikimori.one/api/graphql", {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
  });
  return await res.json();
};
