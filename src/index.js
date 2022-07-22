import './style.css';
import { listeners } from './listeners';
import { renderLists, renderTodos } from './rendertodo';
import { checkData } from './todofactory';
checkData();
listeners();
renderLists();
renderTodos('default');



