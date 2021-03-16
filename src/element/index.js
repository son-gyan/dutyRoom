// 导入自己需要的组件
import { Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col , Form, FormItem,Container,Main,Loading,Header,Footer,
    Checkbox,
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
  }
}
export default element