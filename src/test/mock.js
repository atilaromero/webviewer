import local_fetch from 'node-fetch'

export async function mock_fetch(url) {
  if (url.startsWith('http://localhost:8080/sources/B/docs/')) {
  return {
    ok: true,
    json: () => ({}),
  }
}
switch (url) {
  case 'http://localhost:8080/sources/A/docs/0':
  return {
    ok: false,
    // json: () => {}
  }
  case 'http://localhost:8080/sources/A/docs/1':
  return {
    ok: true,
    json: () => (docA1),
  }
  case 'http://localhost:8080/search?q=fail':
  return {
    ok: true,
    json: () => ({
      data:[
        {
          ids: [0],
          source: "A"
        },
      ]
    }),
  }
  case 'http://localhost:8080/search?q=15docs':
  return {
    ok: true,
    json: () => ({
      data:[
        {
          ids: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
          source: "B"
        },
      ]
    }),
  }
  case 'http://localhost:8080/search?q=sources':
  return {
    ok: true,
    json: () => ({
      data:[
        {
          ids: [1, 116, 196],
          source: "A"
        },
        {
          ids: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
          source: "B"
        },
      ]
    }),
  }
  case 'http://localhost:8080/search?q=teste':
  return {
    ok: true,
    json: () => ({
      data:[
        {
          ids: [116,196],
          source: "A"
        },
      ]
    }),
  }
  case 'http://localhost:8080/sources/A/docs/116':
  return {
    ok: true,
    json: () => (docA116),
  }
  case 'http://localhost:8080/sources/A/docs/196':
  return {
    ok: true,
    json: () => (docA196),
  }
  default:
  throw 'url not in mock_fetch yet: ' + url
}
}

export async function check_mock_fetch(url) {
  let errJson = ''
  try{
    const res = await local_fetch(url)
    const mres = await mock_fetch(url)
    expect(res.ok)
    expect(mres.ok)
    const json = await res.json()
    const mjson = await mres.json()
    errJson = JSON.stringify(json, null, 2)
    expect(json).toEqual(mjson)
    return {
      ok: mres.ok,
      json: mres.json,
    }
  } catch(e) {
    console.log('json:', errJson)
    throw e
  }
}

// global.fetch = jest.fn().mockImplementation(check_mock_fetch)
global.fetch = jest.fn().mockImplementation(mock_fetch)

export const docA1 = {
  "bookmarks": [],
  "id": 1,
  "luceneId": 382,
  "properties": {
    "X-Parsed-By": ["dpf.sp.gpinf.indexer.parsers.RawStringParser",],
    "acesso": ["2018.08.02.21.07.55",],
    "alteracao do registro": ["",],
    "caminho": ["src/dpf",],
    "carved": ["false",],
    "categoria": ["Pastas",],
    "contentType": ["application/octet-stream",],
    "criacao": ["2018.08.02.21.41.02",],
    "deletado": ["false",],
    "duplicate": ["true",],
    "evidenceUUID": ["bd5f5ea3-2a7a-4944-bf4c-0808d93b57bf",],
    "export": ["../src/dpf",],
    "hasChildren": ["false",],
    "hash": ["D41D8CD98F00B204E9800998ECF8427E",],
    "id": ["1",],
    "isDir": ["true",],
    "md5": ["D41D8CD98F00B204E9800998ECF8427E",],
    "modificacao": ["2018.08.02.21.41.02",],
    "nome": ["dpf",],
    "parentId": ["0",],
    "parentIds": ["0 ",],
    "sha-256": ["E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",],
    "subitem": ["false",],
    "tamanho": ["4096",],
    "tipo": ["",],
  },
  "selected": false,
  "source": "A",
}

export const docA116 = {
  "source": "A",
  "id": 116,
  "luceneId": 142,
  "properties": {
    "tipo": [
      "java"
    ],
    "language:detected_1": [
      "en"
    ],
    "language:detected_score_1": [
      "0.9999956"
    ],
    "acesso": [
      "2019.02.21.13.20.35"
    ],
    "hasChildren": [
      "false"
    ],
    "parentIds": [
      "0 4 5 6 17 18 19 25 "
    ],
    "Regex:URL": [
      "http://www.gnu.org/licenses/"
    ],
    "alteracao do registro": [
      ""
    ],
    "language:all_detected": [
      "en"
    ],
    "modificacao": [
      "2019.02.21.13.20.35"
    ],
    "tamanho": [
      "24169"
    ],
    "evidenceUUID": [
      "bd5f5ea3-2a7a-4944-bf4c-0808d93b57bf"
    ],
    "id": [
      "116"
    ],
    "export": [
      "../src/main/java/dpf/sp/gpinf/indexer/process/Manager.java"
    ],
    "contentType": [
      "text/x-java-source"
    ],
    "sha-256": [
      "B301BAA52A5C5BDB873A08732D3CF703529F8F84CE519CEF0AD983531642F2CD"
    ],
    "X-Parsed-By": [
      "dpf.sp.gpinf.indexer.parsers.RawStringParser"
    ],
    "categoria": [
      "Outros Textos"
    ],
    "deletado": [
      "false"
    ],
    "nome": [
      "Manager.java"
    ],
    "duplicate": [
      "false"
    ],
    "criacao": [
      "2019.02.21.13.20.35"
    ],
    "parentId": [
      "25"
    ],
    "subitem": [
      "false"
    ],
    "caminho": [
      "src/main/java/dpf/sp/gpinf/indexer/process/Manager.java"
    ],
    "carved": [
      "false"
    ],
    "hash": [
      "5ADC4B32FF669F3AA41C74D19F1159B0"
    ],
    "isDir": [
      "false"
    ],
    "md5": [
      "5ADC4B32FF669F3AA41C74D19F1159B0"
    ]
  },
  "bookmarks": [],
  "selected": false
}

export const docA196 = {
  "source": "A",
  "id": 196,
  "luceneId": 502,
  "properties": {
    "tipo": [
      "java"
    ],
    "language:detected_1": [
      "en"
    ],
    "language:detected_score_1": [
      "0.9999948"
    ],
    "acesso": [
      "2019.02.21.13.20.35"
    ],
    "hasChildren": [
      "false"
    ],
    "parentIds": [
      "0 4 5 6 17 18 19 32 "
    ],
    "alteracao do registro": [
      ""
    ],
    "language:all_detected": [
      "en"
    ],
    "modificacao": [
      "2019.02.21.13.20.35"
    ],
    "tamanho": [
      "7723"
    ],
    "evidenceUUID": [
      "bd5f5ea3-2a7a-4944-bf4c-0808d93b57bf"
    ],
    "id": [
      "196"
    ],
    "export": [
      "../src/main/java/dpf/sp/gpinf/indexer/desktop/AppMain.java"
    ],
    "contentType": [
      "text/x-java-source"
    ],
    "sha-256": [
      "96303E698879028693D9F31F32052A715F58E5C785D74C4DF076A30F97B8AE64"
    ],
    "X-Parsed-By": [
      "dpf.sp.gpinf.indexer.parsers.RawStringParser"
    ],
    "categoria": [
      "Outros Textos"
    ],
    "deletado": [
      "false"
    ],
    "nome": [
      "AppMain.java"
    ],
    "duplicate": [
      "false"
    ],
    "criacao": [
      "2019.02.21.13.20.35"
    ],
    "parentId": [
      "32"
    ],
    "subitem": [
      "false"
    ],
    "caminho": [
      "src/main/java/dpf/sp/gpinf/indexer/desktop/AppMain.java"
    ],
    "carved": [
      "false"
    ],
    "hash": [
      "4EC70023B62FA169DE45832283979BC1"
    ],
    "isDir": [
      "false"
    ],
    "md5": [
      "4EC70023B62FA169DE45832283979BC1"
    ]
  },
  "bookmarks": [],
  "selected": false
}