const lista = document.getElementById("listaPersonagens")
async function buscarPersonagens(params) {
    try{
        const resposta = await fetch("https://potterapi-fedeperin.vercel.app/pt/characters")
        if(!resposta.ok){
            throw new Error("Pelas barbas de Merlin! Não achei nenhum bruxo...")
        }

        const dados = await resposta.json()

        lista.innerHTML = ''

        dados.forEach(personagem => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
            <img src="${personagem.image}" alt="Foto de ${personagem.fullName}">
                <h3>${personagem.fullName}</h3>
                <p><strong>Casa:</strong> ${personagem.hogwartsHouse}</p>
                <p><strong>Ator:</strong> ${personagem.interpretedBy}</p>
            `;
            lista.appendChild(card)
        })

    } catch (erro) {
        lista.innerHTML = `<h3>Ops! Houve um problema ao buscar os personagens: ${erro.message}</h3>`
    }
}

buscarPersonagens()