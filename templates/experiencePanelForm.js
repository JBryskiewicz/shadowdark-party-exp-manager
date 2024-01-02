export const experiencePanelForm = (actorList, numberOfActors) => {
  let table = `
  <form>
    <table>
  `;

  for (let i = 0; i < numberOfActors; i++) {
    table += `
    <tr>
         <td><b>${actorList[i].name}</b></td>
         <td><b>Level:</b> ${actorList[i].system.level.value}</td>
         <td><b>XP:</b> ${actorList[i].system.level.xp}</td>
         <td>
            <input 
                type="number" 
                name="exp${i}" 
                id="exp${i}" 
                value="" 
            />
         </td>
     </tr>`;
  }

  table += `
    </table>
  </form>
  `;

  return table;
};
