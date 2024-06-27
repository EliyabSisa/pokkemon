const inputEl = document.getElementById('search-input')
const buttonEl = document.getElementById('search-button')
const pokemonNameX = document.getElementById('pokemon-name')
const pokemonId = document.getElementById('pokemon-id')
const WeightX = document.getElementById('weight')
const heightX = document.getElementById('height')
const typeS = document.getElementById('types')
const base = document.getElementById('base')
const hps = document.getElementById('hp')
const attack = document.getElementById('attack')
const defense = document.getElementById('defense')
const spAttack = document.getElementById('s-attack')
const spDefense = document.getElementById('s-defense')
const speed = document.getElementById('speed')
const imageEl = document.getElementById('image-el')

                                               

  const fetchData = async() =>{
    try{
        

   const input = inputEl.value.toLowerCase()
   const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`)
   const data = await res.json()
   
   
   
    imageEl.src = data.sprites.front_default;
    imageEl.style.display = "block"
    pokemonNameX.textContent = data.name    
    pokemonId.textContent = "#" + data.id      
    WeightX.textContent = data.weight
    heightX.textContent = data.height                
    typeS.textContent = data.types[0].type.name

    hps.textContent = data.stats[0].base_stat
    attack.textContent = data.stats[1].base_stat
    defense.textContent =data.stats[2].base_stat
    spAttack.textContent =data.stats[3].base_stat
    spDefense.textContent = data.stats[4].base_stat
    speed.textContent = data.stats[5].base_stat

    }catch(error){
        console.error("error appear!")
    }

  }
 
  
  
buttonEl.addEventListener("click",()=>{
    
    fetchData()

    inputEl.value = ""
    console.log('the button is clicked!')
})




/*fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/pikachu")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error(error))*/
