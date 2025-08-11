# Tarea 1

## Nombre: Keneth Willard Lopez Ovalle

## Carnet: 202100106

## Estructura del proyecto

---

```
	├─ Tarea1/
  ├─ src/                       
  ├─ pom.xml       
  └─ docs/
```

---

## Endpoints

- **GET `/api/music`**
    - **v1.0** → `{"name": "", "song": ""}`
    - **v2.0** → `{"name": "", "album": ""}`

---

## Pasos realizados

### 1) Primer Commit

- **Commit:**
    
    ```
    feat(api): GET /api/music con nombre y canción favorita
    
    Se añade DTO y controlador que devuelven nombre y canción favorita
    Refs #Tarea1
    ```
    
- **Tag:** `release-1.0`
    
    ![primer tag.svg](primer_tag.svg)
    

### 2) Funcionamiento api

![nameAndSong.svg](nameAndSong.svg)

### 3) Hotfix: cambiar de cancion a album

![hotfix create.svg](hotfix_create.svg)

![hotfix.svg](hotfix.svg)

![status.svg](status.svg)

### 4) Segundo Commit en hotfix

- **Commit:**

```
fix(api): mostrar álbum favorito en la respuesta

Se reemplaza el campo mostrado por el álbum favorito en el endpoint /api/music
BREAKING CHANGE: el JSON cambia de {name, song} a {name, album}
```

- **Tag:** `release-2.0`
    
    ![segundo tag.svg](segundo_tag.svg)
    

### 5) Segunda prueba en la api

![2 curl.svg](2_curl.svg)

### 6) Eliminar rama hotfix

![delete branch.svg](delete_branch.svg)

### 7) Verificar cambios realizados

![final.svg](final.svg)