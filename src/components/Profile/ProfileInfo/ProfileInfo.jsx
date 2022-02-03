import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import yesWork from '../../../assets/images/yeswork.jpg'
import nosWork from '../../../assets/images/nowork.jpg'
import user from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) =>{

    let ava = (photos) => {
        if(photos){
            return <img className={classes.avaItem} src={photos}/>
        }
        return <img className={classes.avaItem} src={user}/>
    }
    if(!props.profile){
        return <Preloader />
    }
    let Work = props.profile.lookingForAJob ? <img src={yesWork}/>: <img src={nosWork}/>
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.topImg} src="https://www.seocom.ru/images/nasha-analitika/zagolovok/1500x500.jpg" alt=""/>
            </div>
            <div className={classes.discriptionBlock}>
                <div className={classes.fullName}>
                    <h3>{props.profile.fullName}</h3>
                </div>
                <div className={classes.ava}>
                    {ava(props.profile.photos.large)}
                </div>
                <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus} />
                <h2>О бо мне: {props.profile.aboutMe}</h2>
                <div className={classes.photoWork}>
                    {Work}
                </div>
                <div>
                    <h3>На самом деле: {props.profile.lookingForAJobDescription}</h3>
                </div>
                <div>
                    <h3> Мои контакты: </h3>
                    <div>
                        <span>{props.profile.contacts.facebook}</span>
                    </div>
                    <div>
                        <span>{props.profile.contacts.website}</span>
                    </div>
                    <div>
                        <span>{props.profile.contacts.vk}</span>
                    </div>
                    <div>
                        <span>{props.profile.contacts.twitter}</span>
                    </div>
                    <div>
                        <span>{props.profile.contacts.instagram}</span>
                    </div>
                    <div>
                        <span>{props.profile.contacts.youtube}</span>
                    </div>
                    <div>
                        <span>{props.profile.contacts.github}</span>
                    </div>
                    <div>
                        <span>{props.profile.contacts.mainLink}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;