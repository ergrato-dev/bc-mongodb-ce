# ADR-001: Nomenclatura de Carpetas de Semanas

**Estado**: Aplicado  
**Fecha**: 2026-03-21  
**Alcance**: `bootcamp/week-XX/` → `bootcamp/week-XX-tema_principal/`

---

## Contexto

Las carpetas de semanas seguían el esquema `week-XX` (ej: `week-07`), que no
comunicaba el contenido al leer la estructura de directorios. Al navegar el
repositorio era necesario abrir el README de cada semana para conocer el tema.

## Decisión

Renombrar todas las carpetas de semanas al esquema:

```
week-XX-tema_principal
```

Donde `tema_principal` es una versión en snake_case del título de la semana,
extraída del encabezado `# Semana XX — Título` de su `README.md`.

### Reglas de normalización del tema

| Regla                          | Ejemplo                              |
|-------------------------------|--------------------------------------|
| Minúsculas                    | `CRUD` → `crud`                      |
| Espacios → guión bajo         | `Pipeline I` → `pipeline_i`          |
| Acentos eliminados            | `Índices` → `indices`                |
| Caracteres especiales omitidos| `$`, `(`, `)`, `:`, `—` se eliminan  |
| Guiones compuestos → `_`      | `$lookup y $unwind` → `lookup_y_unwind` |

---

## Mapeo completo

| Carpeta antigua | Carpeta nueva                                                   |
|----------------|-----------------------------------------------------------------|
| `week-01`      | `week-01-introduccion_a_mongodb_y_nosql`                        |
| `week-02`      | `week-02-crud_i_insercion_y_lectura`                            |
| `week-03`      | `week-03-crud_ii_operadores_de_consulta`                        |
| `week-04`      | `week-04-operadores_logicos_y_de_array`                         |
| `week-05`      | `week-05-crud_iii_actualizacion_y_eliminacion`                  |
| `week-06`      | `week-06-tipos_bson_y_subdocumentos`                            |
| `week-07`      | `week-07-indices_basicos_y_explain`                             |
| `week-08`      | `week-08-proyecto_integrador_etapa_0`                           |
| `week-09`      | `week-09-aggregation_pipeline_i`                                |
| `week-10`      | `week-10-aggregation_pipeline_ii_acumuladores_avanzados`        |
| `week-11`      | `week-11-lookup_y_unwind_joins`                                 |
| `week-12`      | `week-12-aggregation_pipeline_iii_facet_bucket_replaceroot_merge` |
| `week-13`      | `week-13-indices_avanzados_compuestos_ttl_parciales_y_unicos`   |
| `week-14`      | `week-14-indices_de_texto_y_geoespaciales`                      |
| `week-15`      | `week-15-patrones_de_modelado_avanzado`                         |
| `week-16`      | `week-16-validacion_de_esquemas_y_transacciones_acid`           |
| `week-17`      | `week-17-optimizacion_de_rendimiento_y_query_plans`             |
| `week-18`      | `week-18-patrones_de_esquema_avanzados_ii`                      |
| `week-19`      | `week-19-change_streams`                                        |
| `week-20`      | `week-20-gridfs_y_time_series`                                  |
| `week-21`      | `week-21-replicacion_y_alta_disponibilidad`                     |
| `week-22`      | `week-22-seguridad_y_administracion`                            |
| `week-23`      | `week-23-mongodb_con_nodejs`                                    |
| `week-24`      | `week-24-proyecto_final_capstone`                               |

---

## Consecuencias

### Positivas

- La estructura de directorios comunica el contenido sin abrir archivos.
- Navegación más intuitiva tanto en terminal como en GitHub.
- Consistencia con convenciones de proyectos educativos que incluyen el tema
  en el nombre del recurso.

### Neutrales

- Los scopes de commits (`week-05`, `week-10`) siguen siendo identificadores
  cortos para mensajes de commit — no se modifican en `.gitmessage`.
- El campo `"name"` en `package.json` no es una ruta; no afecta la ejecución.

### A considerar para nuevas semanas

Al crear contenido para una nueva semana, el nombre de carpeta debe seguir
el esquema desde el inicio:

```bash
# ✅ Correcto
bootcamp/week-25-tema_de_la_semana/

# ❌ Incorrecto
bootcamp/week-25/
```

La fuente del tema es **siempre** el encabezado H1 del `README.md` de la semana.

---

## Archivos modificados

Se actualizaron 91+ referencias en 47 archivos incluyendo:

- `README.md` y `README_EN.md` (raíz)
- `SECURITY.md`, `CONTRIBUTING.md`, `.github/copilot-instructions.md`
- `_scripts/README.md`
- `bootcamp/week-XX-*/README.md` (navegación entre semanas)
- Scripts con rutas absolutas en comentarios
