import { TodosPage } from "./TodosPage";
import { Route } from "react-router";
import { TodoDetailPage } from "./TodoDetailPage";

export const TodosOutlet = () => (
  <>
    <Route exact path="/todo">
      <TodosPage />
    </Route>
    <Route path="/todo/:id">
      <TodoDetailPage />
    </Route>
  </>
);
