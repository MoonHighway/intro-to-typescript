interface UserProfile {
  username: string;
  email: string;
  premiumMember: boolean;
}

type UserProfileValue = string | number | boolean;

interface DetailedUserProfile extends UserProfile {
  [key: string]: UserProfileValue;
}

const userProfile: DetailedUserProfile = {
  username: "avani.acharya",
  email: "avani.acharya@theinternet.com",
  premiumMember: true,
  age: 30,
  country: "India",
};

function updateProfile(
  profile: DetailedUserProfile,
  key: string,
  value: UserProfileValue
): DetailedUserProfile {
  const updatedProfile = { ...profile };
  updatedProfile[key] = value;

  return updatedProfile;
}

const updatedProfile = updateProfile(userProfile, "premiumMember", false);

console.log(updatedProfile);

// -- Extra credit --

const userProfiles: DetailedUserProfile[] = [
  {
    username: "avani.acharya",
    email: "avani.acharya@theinternet.com",
    premiumMember: false,
    age: 30,
    country: "India",
  },
  {
    username: "jim.mo",
    email: "jim.mo@theinternet.com",
    premiumMember: false,
    newsletterSubscribed: true,
  },
];

for (const profile of userProfiles) {
  const updatedProfile = updateProfile(profile, "premiumMember", true);

  console.log(updatedProfile);
}
