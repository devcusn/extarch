import CSS from "../../core/class/coreCSS.js";

const style = new CSS(/*css*/ `.modal {
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  width: 600px;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px 1px #dbdada;
  border-radius: 15px;
  height: 60%;
}
.modal_title {
  font-size: 80px;
  color: rgb(66, 66, 248);
  font-weight: bold;
  text-align: center;
}
.modal_content {
  padding: 20px 0px;
  color: #5a5a5a;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  height: 100%;
}

.modal_footer {
  display: flex;
}
.modal_footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #202020;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  height: 140px;
  width: 140px;
  margin-right: 10px;
  box-shadow: 0px 0px 5px 1px #cccccc;
}

.modal_footer a.blue {
  background-color: rgb(66, 66, 248);
  color: #fafafa;
}
`);

export default style.build();
