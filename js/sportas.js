export function renderSportTable(data) {
   let HTML = '';

   for (let i = 0; i < data.length; i++) {
      // jei būtų HTML=, tai išspausdintų vieną reikšmę.
      HTML += `
      <tr>
      <td>${i + 1}</td>
      <td>${data[i].title}</td>
      <td>${data[i].date}</td>
      </tr>`;   
   }

    return `
    <table>
         <thead>
            <tr>
               <td>#</td>
               <td>Name</td>
               <td>Next game date</td>
            </tr>
         </thead>
         <tbody>${HTML}</tbody
                </table> 
         `
}


/* <tr>
<td>2</td>
<td>Futbolas</td>
<td> 2024-07-05</td>
</tr>

<tr>
<td>3</td>
<td>Kvadratas</td>
<td> 2024-07-06</td>
</tr>

<tr>
<td>4</td>
<td>Tinklinis</td>
<td> 2024-07-07</td>
</tr> 


atsirado numeracija 1-10
<td>${i + 1}</td>*/