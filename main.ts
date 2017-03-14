import RC=require("types-ui");
const person={
    id:"Person",
    type:"object",
    properties:{
        name: "string",
        lastName:"string",
        skills:{
            type:"array",
            itemType:"string"
        },
        age:"number"
    },
    required:["name","lastName"],
    representation: { "hc(grab,eq)":[ { vc: ["name","lastName","age"]}, {"list-only":"skills"} ]}

}
const value={
  id:"Text",
  type:"text"
}
RC.rtb.service.register(person);
var bnd=RC.render(document.getElementById("example"),person,{name:"Pavel",lastName:"Petrochenko"},{})
var tb=RC.render(document.getElementById("text"),value,"",{});

bnd.addListener(x=>tb.set(JSON.stringify(bnd.get(),null,2)))