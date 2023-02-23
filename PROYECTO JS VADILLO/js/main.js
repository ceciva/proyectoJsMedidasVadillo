
while(true){
    let distKm= parseFloat (prompt("Qué distancia en km querés convertir a otras unidades?:"))
        if(!isNaN(distKm)&& distKm !=null && distKm!=""){
        millas(distKm)
        cm(distKm)
        yardas(distKm)
        pies(distKm)
        pulgadas(distKm)
        millaNautica(distKm)
        break
    
        }else{
            alert("No ingresaste un número!")
            continue
        }
}

    function millas(distKm){
    let milla = distKm / 1.609
    console.log(distKm + "km "+ "= " + milla.toFixed(2)+ "  millas")
    }
        
    function cm(distKm){
    let cent = distKm * 100000
    console.log(distKm + "km "+"= " + cent + " centímetros")
    }
    function yardas(distKm){
    let yarda = distKm * 1094
    console.log(distKm + "km "+ "= "+ yarda.toFixed(2)+ " yardas")
    }
    function pies(distKm){
    let pie = distKm * 3281
    console.log(distKm + "km "+ "= " +pie.toFixed(2) + " pies")
    }
    function pulgadas(distKm){
    let pulg = distKm * 39370
    console.log(distKm + "km "+ "= "+pulg.toFixed(2) + " pulgadas")
    }
    function millaNautica(distKm){
    let mN = distKm / 1.852
    console.log(distKm + "km "+ "= "+mN.toFixed(2) + " Millas naúticas")
    }
    

