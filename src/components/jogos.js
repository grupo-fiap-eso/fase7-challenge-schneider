import { Jogosstyle } from "../styled"

function Jogos() {
    
    const geral = {
        fontSize: '50px',
        display: 'inline-block'
        
    }
    

    return(
<Jogosstyle>
    <div class="box">
        <h1 style={{marginLeft: '35tpx', margintop: '15px'}}>Desafio</h1>
            <div style={{backgroundColor: '00FF7F', borderRadius: '30px', paddingLeft: '100px'}}></div>
            <div style={{display:"flex", flexDirection: "column", flexWrap: "nowrap"}}>    
            <div>
            <div style={geral} class="box">
                <div style={{backgroundColor: '#00FF7F', borderRadius: '5px', paddingLeft: '50px'}}>
                <h2>Desafio ONU</h2>
                </div>
                
                    <h5> <iframe style={{ width: "300px !important"}} src="https://wordwall.net/pt/embed/92919c0152c24abd983b7dc662ca6040?themeId=43&templateId=5&fontStackId=21" width="1000" height="800" frameborder="0" allowfullscreen></iframe></h5>
            </div>
            
            </div>
            <div style={geral} class="box">
                <div style={{backgroundColor: '#00FF7F', borderRadius: '5px', paddingLeft: '50px'}}>
                <h2>Desafio da Recilcagem</h2>
                </div>
                
                    <h5> <iframe style={{ width: "300px !important"}} src="https://wordwall.net/pt/embed/b7a6fc613ad94030afa226e779577f49?themeId=2&templateId=25&fontStackId=0" width="1000" height="800" frameborder="0" allowfullscreen></iframe></h5>
            </div>
                
            
            <div style={geral} class="box">
                <div style={{backgroundColor: '#00FF7F', borderRadius: '5px', paddingLeft: '50px'}}>
                <h2>Desafio da Combinação </h2>
                </div>
                
                    <h5><iframe style={{ width: "300px !important"}}  src="https://wordwall.net/pt/embed/e9fe566307594a359df2082de2a632a7?themeId=41&templateId=3&fontStackId=0" width="1000" height="800" frameborder="0" allowfullscreen></iframe> </h5>
            </div>
            
            <div style={geral} class="box">
                <div style={{backgroundColor: '#00FF7F', borderRadius: '5px', paddingLeft: '50px'}}>
                <h2> Desafio da inovação </h2>
                </div>
                
                    <h5><iframe style={{ width: "300px !important"}}  src="https://wordwall.net/pt/embed/ddb5f4a4d3a54f6ebce1d7341158b777?themeId=21&templateId=69&fontStackId=0" width="1000" height="800" frameborder="0" allowfullscreen></iframe> </h5>
            </div>
            </div>        
            </div>
            </Jogosstyle>


)

}

export default Jogos