db.createCollection("provincias", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre"],
      properties: {
        nombre: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("localidades", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "provincia"],
      properties: {
        nombre: { bsonType: "string" },
        provincia: {
          bsonType: "objectId",
          description: "ID de la provincia a la que pertenece la localidad (referencia a la colección provincias)"
        }
      }
    }
  }
});

db.createCollection("clientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "apellidos", "direccion", "codigo_postal", "localidad", "telefono"],
      properties: {
        nombre: { bsonType: "string" },
        apellidos: { bsonType: "string" },
        direccion: { bsonType: "string" },
        codigo_postal: { bsonType: "string" },
        localidad: {
          bsonType: "objectId",
          description: "ID de la localidad a la que pertenece el cliente (referencia a la colección localidades)"
        },
        telefono: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("categoria_producto", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "subcategorias_pizzas"],
      properties: {
        nombre: { bsonType: "string" },
        subcategorias_pizzas: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              nombre: { bsonType: "string" }
            }
          }
        }
      }
    }
  }
});

db.createCollection("productos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "descripcion", "imagen", "precio", "categoria_producto_id"],
      properties: {
        nombre: { bsonType: "string" },
        descripcion: { bsonType: "string" },
        imagen: { bsonType: "string" },
        precio: { bsonType: "double" },
        categoria_producto_id: { bsonType: "objectId", description: "(referencia a la colección categoría producto)" }
      }
    }
  }
});



db.createCollection("tiendas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["direccion", "codigo_postal", "localidad_id"],
      properties: {
        direccion: { bsonType: "string" },
        codigo_postal: { bsonType: "string" },
        localidad_id: {
          bsonType: "objectId",
          description: "ID de la localidad en la que se encuentra la tienda (referencia a la colección localidades)"
        }
      }
    }
  }
});

db.createCollection("empleados", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "apellidos", "nif", "telefono", "rol", "tienda_id"],
      properties: {
        nombre: { bsonType: "string" },
        apellidos: { bsonType: "string" },
        nif: { bsonType: "string" },
        telefono: { bsonType: "string" },
        rol: { bsonType: "string" },
        tienda_id: {
          bsonType: "objectId",
          description: "ID de la tienda en la que trabaja el empleado (referencia a la colección tiendas)"
        }
      }
    }
  }
});

db.createCollection("pedidos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fecha_hora_pedido", "tipo_pedido", "cantidad_hamburguesas", "cantidad_pizzas", "cantidad_bebidas", "precio_total", "fecha_hora_entrega", "empleado_repartidor", "cliente", "productos", "localidad"],
      properties: {
        fecha_hora_pedido: { bsonType: "date" },
        tipo_pedido: { bsonType: "string" },
        cantidad_hamburguesas: { bsonType: "int" },
        cantidad_pizzas: { bsonType: "int" },
        cantidad_bebidas: { bsonType: "int" },
        precio_total: { bsonType: "double" },
        fecha_hora_entrega: { bsonType: "date" },
        empleado_repartidor: {
          bsonType: "objectId",
          description: "ID del empleado repartidor (referencia a la colección empleados)"
        },
        cliente: {
          bsonType: "objectId",
          description: "ID del cliente (referencia a la colección clientes)"
        },
        productos: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              producto: {
                bsonType: "objectId",
                description: "ID del producto (referencia a la colección productos)"
              },
              cantidad: { bsonType: "int" }
            }
          }
        },
        localidad: {
          bsonType: "objectId",
          description: "ID de la localidad (referencia a la colección localidades)"
        }
      }
    }
  }
});



