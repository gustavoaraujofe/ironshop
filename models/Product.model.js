// Importar o mongoose
const mongoose = require("mongoose");

// Definifir quais campos e quais regras desses campos os documentos no MongoDB terão (Schema)
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 50},
  description: { type: String, required: true, trim: true, maxLength:280},
  price: { type: Number, required: true, trim: true, min: 0},
  type: {type: String, required: true, trim: true, enum: ["Itens de Loja", "Pratos"]},
  tag: { type: String, required: true, enum: ["Bebidas", "Remedios", "Mercearia", "Frios E Laticinios", "Carnes, Aves e Peixes", "Embalagens E Descartáveis","Africana", "Alemã", "Árabe", "Argentina", "Asiática", "Açaí", "Baiana", "Bebidas", "Brasileira", "Cafeteria", "Carnes", "Casa de Sucos", "Chinesa", "Colombiana", "Congelados Fit", "Congelados", "Contemporânea", "Coreana", "Cozinha Rápida", "Crepe", "Doces e Bolos", "Espanhola", "Francesa", "Frangos", "Frutos do Mar", "Gaúcha", "Grega", "Hambúrguer", "Indiana", "Italiana", "Japonesa", "Lanches", "Marmita", "Marroquina", "Mediterrânea", "Mexicana", "Mineira", "Nordestina", "Padaria", "Panqueca", "Paranaense", "Pastel", "Peixes", "Peruana", "Pizza", "Portuguesa", "Presentes", "Salgados", "Saudável", "Sopas & Caldos", "Sorvetes", "Tailandesa", "Tapioca", "Típica do Norte", "Variada", "Vegana", "Vegetariana", "Xis", "Yakisoba"]},
  available: { type: Boolean, required: true, enum: [true, false]},
  picture: { type: String, trim: true, default:"https://www.food4fuel.com/wp-content/uploads/woocommerce-placeholder-600x600.png"},
  establishment: [{ type: mongoose.Types.ObjectId, ref: "Establishment" }]
});

// Exportar o modelo da coleção
module.exports = mongoose.model("Product", ProductSchema);
