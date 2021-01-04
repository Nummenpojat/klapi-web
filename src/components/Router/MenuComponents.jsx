import TopMenu from './../navigation/menus/TopMenu';
import BottomMenu from './../navigation/menus/BottomMenu';

// this component contains menus for app, they are displayed always
export default props => {
    return (
        <>
        <TopMenu />
        <BottomMenu bottomLinks={props.bottomLinks} />
        </>
    );
}