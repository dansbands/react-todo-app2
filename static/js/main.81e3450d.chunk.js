(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),s=(n(15),n(8)),l=n(1),c=n(2),d=n(4),p=n(3),u=n(5),h=(n(16),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"form-inline",onSubmit:this.props.onSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("input",{className:"form-control",type:"text",value:this.props.value,onChange:this.props.onChange}),o.a.createElement("button",{className:"btn btn-default"},"Submit")))}}]),t}(o.a.Component)),m=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;console.log("Todo",this.props);var t=this.props.editing===this.props.index?"panel-text editing":"panel-text";return o.a.createElement("div",{className:"panel-wrapper"},o.a.createElement("div",{className:"panel panel-default width-80"},o.a.createElement("div",{className:"panel-body"},this.props.editing===this.props.index?o.a.createElement("form",{onSubmit:function(){return e.props.submitEdit(e.props.index)}},o.a.createElement("input",{value:this.props.dataToEdit,onChange:this.props.handleEdit})):o.a.createElement("span",{className:t,onClick:function(){return e.props.toggleEdit(e.props.index)}},this.props.data),o.a.createElement("span",{className:"glyphicon glyphicon-trash pull-right",onClick:function(){return e.props.onDelete(e.props.index)}}))),o.a.createElement("div",{className:"chevrons pull-right"},o.a.createElement("span",{className:"glyphicon glyphicon-chevron-up",onClick:function(){return e.props.orderUp(e.props.index)}}," "),o.a.createElement("span",{className:"glyphicon glyphicon-chevron-down",onClick:function(){return e.props.orderDown(e.props.index)}}," ")))}}]),t}(o.a.Component),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={value:"",todos:["abc","123","howdy"],editing:-1},n.handleChange=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.setState({todos:[].concat(Object(s.a)(n.state.todos),[n.state.value]),value:""})},n.handleReorderUp=function(e){var t=n.state.todos;e>0&&(t.splice(e-1,0,t.splice(e,1)[0]),n.setState({todos:t}))},n.handleReorderDown=function(e){var t=n.state.todos;e<t.length-1&&(t.splice(e+1,0,t.splice(e,1)[0]),n.setState({todos:t}))},n.toggleEdit=function(e){var t=n.state.todos[e];n.setState({editing:e,editValue:t})},n.handleEdit=function(e){n.setState({editValue:e.target.value})},n.submitEdit=function(e){var t=n.state.todos;t[e]=n.state.editValue,n.setState({todos:t,editValue:"",editing:-1})},n.handleDelete=function(e){var t=n.state.todos;t.splice(e,1),n.setState({todos:t})},n.renderTodos=function(e){return n.state.todos.map(function(e,t){return o.a.createElement(m,{key:t,data:e,index:t,editing:n.state.editing,dataToEdit:n.state.editValue,toggleEdit:n.toggleEdit,handleEdit:n.handleEdit,submitEdit:n.submitEdit,orderUp:n.handleReorderUp,orderDown:n.handleReorderDown,onDelete:n.handleDelete})})},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h3",null,"React To-Do App"),o.a.createElement(h,{value:this.state.value,onChange:this.handleChange,onSubmit:this.handleSubmit})),o.a.createElement("div",{className:"todo-container"},this.renderTodos()))}}]),t}(a.Component);r.a.render(o.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.81e3450d.chunk.js.map