/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_ITEM_NOTA_FISCAL').del()
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {id: 1, sequencial: 'xx'},
    {id: 2, quantidade: 'xx'},
    {id: 3, produto: 'Produto'},
    {id: 4, notaFiscal: 'xx'}
  ]);
};
