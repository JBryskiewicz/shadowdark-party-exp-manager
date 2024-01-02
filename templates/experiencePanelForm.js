const limitNameLength = (name) => {
  return name.split(" ")[0].substring(0, 9);
};

export const experiencePanelForm = (actorList, numberOfActors) => {
  let table = `
  <form>
    <table>
  `;

  for (let i = 0; i < numberOfActors; i++) {
    table += `
    <tr>
         <td><b>${limitNameLength(actorList[i].name)}</b></td>
         <td><b>Level:</b> ${actorList[i].system.level.value}</td>
         <td>
          <b>XP:</b> 
          ${actorList[i].system.level.xp} 
          / 
          ${actorList[i].system.level.value * 10}
         </td>
         <td>
            <input 
                type="number" 
                name="exp${i}" 
                id="exp${i}" 
                value=""
                style="width: 48px;"
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
