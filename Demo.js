const data = [
        { name: "Vodka Ketel One Grapefruit & Rose bottle 750ml", 
          price: "10.23"  
        },
        { name: "Vodka Ketel One Grapefruit & Rose bottle 750ml", 
          price: "5.23"  
        },
        { name: "VODKA KETEL ONE GRAPEFRUIT & ROSE 750ML", 
          price: "49.23"
        },
        { name: "Vodka Ketel One Grapefruit & Rose 750ml", 
          price: "119.23"   
        },
        { name: "Sojo Imported Aroma de Grapefruit Jinro Grapefruit...", 
          price: "2.23"   
        },
        { name: "Drink SMIRNOFF Seltzer Orange & Grapefruit Lata 25...", 
          price: "10.23"  
        },
        { name: "Sakê Drink Sparkling Grapefruit Azuma Kirin bottle...", 
          price : "9.23"   
        }
      ];
    
//const inLowerCase = data.map(a => a.name ? {...a, name : a.name.toLowerCase()} : {...a});

const grouped = data.reduce((previous, current) => {
    if (!previous[current.name]) {
      const found = previous.find(element => (element.name && element.name.toLowerCase()) === current.name.toLowerCase());
      if (found) {
        const index = previous.indexOf(found);
        previous.splice(index,1);
        // We add always at the top
        previous.unshift([found, current]);
      } else {
        previous.push(current);
      }
    } 
    return previous;
  }, [])
  
  console.log(grouped);