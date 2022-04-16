import { UserProfile } from "../model/UserProfile";
import { ProfileDetailProps } from "./ProfileDetailProps";

export interface ProfileCardProps {
  User: UserProfile;
  Detail?: ProfileDetailProps;
}