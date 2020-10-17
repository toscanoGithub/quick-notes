import { LeakAdd } from "@material-ui/icons";
import ls from "local-storage";

export const initialState = {
  tasks: ls.get("ADD_TASK")?.length > 0 ? ls.get("ADD_TASK") : [] ,
  newTask: null
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => {
    console.log("====================================");
    console.log("item: ", item);
    console.log("====================================");
    return item + amount;
  }, 0);

const reducer = (state, action) => {
  switch (action.type) {

    case "ADD_TASK":
    ls.set("ADD_TASK", [...state.tasks, action.newTask])

      return {
        ...state,
        tasks: [...state.tasks, action.newTask]
      };
    
      
      
    case "REMOVE_TASK":
      const index = state.tasks.findIndex(
        (task) => task.id === action.id
      );
      let newTasks = [...state.tasks]; // copy on tasks

      if (index >= 0) {
        newTasks.splice(index, 1);
        ls.set("ADD_TASK", newTasks)
         return {
        ...state,
        tasks: newTasks,
      };
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

   

    case "SET_AUTH":
      console.log("SET_AUTH", action.auth);
      return {
        ...state,
        auth: action.auth,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };

    

    default:
      return state;
  }
};

export const getCategories = () => {
  return [
    {
      id: 9,
      category: "General Knowledge",
    },

    {
      id: 10,
      category: "Entertainment:Books",
    },

    {
      id: 11,
      category: "Entertainment:Film",
    },
    {
      id: 12,
      category: "Entertainment:Music",
    },

    {
      id: 13,
      category: "Entertainment:Musicals & Theatres",
    },
    {
      id: 14,
      category: "Entertainment:Television",
    },
    {
      id: 15,
      category: "Entertainment:Video Games",
    },
    {
      id: 16,
      category: "Entertainment:Board Games",
    },
    {
      id: 17,
      category: "Science & Nature",
    },
    {
      id: 18,
      category: "Science: Computers",
    },
    {
      id: 19,
      category: "Science: Mathematics",
    },
    {
      id: 20,
      category: "Mythology",
    },
    {
      id: 21,
      category: "Sports",
    },
    {
      id: 22,
      category: "Geography",
    },
    {
      id: 23,
      category: "History",
    },
    {
      id: 24,
      category: "Politics",
    },
    {
      id: 25,
      category: "Art",
    },
    {
      id: 26,
      category: "Celebrities",
    },
    {
      id: 27,
      category: "Animals",
    },
    {
      id: 28,
      category: "Vehiculs",
    },
    {
      id: 29,
      category: "Comics",
    },
    {
      id: 30,
      category: "Science: Gadgets",
    },
    {
      id: 31,
      category: "Japanese Anime",
    },
    {
      id: 32,
      category: "Cartoon & Animations",
    },
  ];
};

export default reducer;
