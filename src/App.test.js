import App from './App';
import { create } from "react-test-renderer";

describe('renders learn react link', () => {
    let AppComp = create(<App />);
    test("App rendering", () => {
        expect(AppComp !== null).toBeTruthy();
        expect(AppComp.toJSON()).toMatchSnapshot();
    });
});
