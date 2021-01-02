import TopMenu from './../navigation/menus/TopMenu';
import BottomMenu from './../navigation/menus/BottomMenu';

export default props => {
    return (
        <>
        <TopMenu />
        <BottomMenu bottomLinks={props.bottomLinks} />
        </>
    );
}