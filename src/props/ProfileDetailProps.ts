import { UserBackground } from "../model/UserBackground";
import { UserCareerEvent as UserCareerEvent } from "../model/UserCareerEvent";
import { UserSkillset } from "../model/UserSkillset";

export interface ProfileDetailProps {
  BackgroundStories?: UserBackground[];
  Skillsets?: UserSkillset[];
  CareerJourney?: UserCareerEvent[];
}