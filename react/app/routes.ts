import { type RouteConfig, index, route} from "@react-router/dev/routes";
export default [
    index("./page/demo.tsx")
] satisfies RouteConfig;


// export default [
//     // index("routes/home.tsx"),
//     index("demo", "./page/demo.tsx")
// ] satisfies RouteConfig;