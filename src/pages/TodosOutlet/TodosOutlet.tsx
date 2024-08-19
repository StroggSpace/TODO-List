import { TodosPage } from "./TodosPage";
import { Route, Switch } from "react-router";
import { TodoDetailPage } from "./TodoDetailPage";
import { TodosTrash } from "./TodosTrash";

export const TodosOutlet = () => (
  <Switch>
    <Route exact path="/todo">
      <TodosPage />
    </Route>
    <Route exact path="/todo/trash">
      <TodosTrash />
    </Route>
    <Route path="/todo/:id">
      <TodoDetailPage />
    </Route>
  </Switch>
);
