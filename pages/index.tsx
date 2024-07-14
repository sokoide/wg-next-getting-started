import { NextPage } from "next";
import { useQuery, withWunderGraph } from "../components/generated/nextjs";

const Home: NextPage = () => {
	const users = useQuery({
		operationName: "users/all",
	});
    return (
        <div>
			<p>users</p>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    );
};

export default withWunderGraph(Home);
