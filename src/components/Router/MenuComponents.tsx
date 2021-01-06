import TopMenu from './../Navigation/menus/TopMenu';
import BottomMenu from './../Navigation/menus/BottomMenu';

// this component contains menus for app, they are displayed always
export default (props:any) => {
    return (
        <>
        <TopMenu />
        <BottomMenu bottomLinks={props.bottomLinks} />
        </>
    );
}