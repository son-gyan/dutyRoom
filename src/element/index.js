// 导入自己需要的组件
import Vue from 'vue'
import { Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col , Form, FormItem,Container,Main,Loading,Header,Footer,Switch,Card,Image,Tag,Pagination,Message,
    Checkbox,Cascader,
    CheckboxButton,
    CheckboxGroup,
    DatePicker,
    TimeSelect,
    TimePicker,
    Button,Table,
    TableColumn,InfiniteScroll,Avatar} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Container)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Loading)
    Vue.use(Header)
    Vue.use(Switch)
    Vue.use(Checkbox)
    Vue.use(CheckboxButton)
    Vue.use(CheckboxGroup)
    Vue.use(DatePicker)
    Vue.use(TimeSelect)
    Vue.use(TimePicker)
    Vue.use(Button)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(InfiniteScroll)
    Vue.use(Avatar)
    Vue.use(Card)
    Vue.use(Image)
    Vue.use(Tag)
    Vue.use(Pagination)
    Vue.use(Cascader)
  }
}
Vue.prototype.$message = Message;
export default element