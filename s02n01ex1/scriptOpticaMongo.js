db.createCollection("proveedores", {
  validator: {
    {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'nombre',
          'direccion',
          'telefono',
          'nif'
        ],
        properties: {
          nombre: {
            bsonType: 'string',
            description: 'Nombre del Proveedor'
          },
          direccion: {
            bsonType: 'object',
            properties: {
              calle: {
                bsonType: 'string'
              },
              numero: {
                bsonType: 'string'
              },
              piso: {
                bsonType: 'string'
              },
              puerta: {
                bsonType: 'string'
              },
              ciudad: {
                bsonType: 'string'
              },
              codigo_postal: {
                bsonType: 'string'
              },
              pais: {
                bsonType: 'string'
              }
            }
          },
          telefono: {
            bsonType: 'string'
          },
          fax: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          }
        }
      }
    }
  }
})

db.createCollection("gafas", {
  validator: {
    {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'marca',
          'graduacion_cristales',
          'tipo_montura',
          'color_montura',
          'color_cristales',
          'precio',
          'proveedor_id'
        ],
        properties: {
          marca: {
            bsonType: 'string',
            description: 'Nombre de la Marca'
          },
          graduacion_cristales: {
            bsonType: 'object',
            properties: {
              ojo_derecho: {
                bsonType: 'string',
                description: 'Graduación Ojo Derecho'
              },
              ojo_izquierdo: {
                bsonType: 'string',
                description: 'Graduación Ojo Izquierdo'
              }
            }
          },
          tipo_montura: {
            'enum': [
              'Flotante',
              'Pasta',
              'Metálica'
            ],
            description: 'Tipo de Montura (Flotante, Pasta o Metálica)'
          },
          color_montura: {
            bsonType: 'string',
            description: 'Color de la Montura'
          },
          color_cristales: {
            bsonType: 'object',
            properties: {
              ojo_derecho: {
                bsonType: 'string',
                description: 'Color Ojo Derecho'
              },
              ojo_izquierdo: {
                bsonType: 'string',
                description: 'Color Ojo Izquierdo'
              }
            }
          },
          precio: {
            bsonType: 'number',
            description: 'Precio de las Gafas'
          },
          proveedor_id: {
            bsonType: 'objectId',
            description: 'ID del Proveedor que suministra estas gafas'
          }
        }
      }
    }
  }
})

db.createCollection("empleados", {
  validator: {
   {
     $jsonSchema: {
       bsonType: 'object',
       required: [
         'nombre'
       ],
       properties: {
         nombre: {
           bsonType: 'string',
           description: 'Nombre del Empleado'
         },
         ventas_anteojos: {
           bsonType: 'array',
           items: {
             bsonType: 'objectId'
           },
           description: 'ID de las Gafas vendidas por este Empleado'
         }
       }
     }
   }
  }
})

db.createCollection("clientes", {
  validator: {
    {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'nombre',
          'direccion_postal',
          'telefono',
          'correo_electronico',
          'fecha_registro'
        ],
        properties: {
          nombre: {
            bsonType: 'string',
            description: 'Nombre del Cliente'
          },
          direccion_postal: {
            bsonType: 'string',
            description: 'Dirección Postal'
          },
          telefono: {
            bsonType: 'string',
            description: 'Número de Teléfono'
          },
          correo_electronico: {
            bsonType: 'string',
            description: 'Correo Electrónico',
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          },
          fecha_registro: {
            bsonType: 'date',
            description: 'Fecha de Registro'
          },
          recomendado_por: {
            bsonType: 'objectId',
            description: 'ID del Cliente que recomendó a este Cliente (si aplica)'
          }
        }
      }
    }
  }
})