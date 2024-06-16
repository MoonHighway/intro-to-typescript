interface UserProfile {
  username: string;
  email: string;
  premiumMember: boolean;
}

type UserProfileValue = string | number | boolean

interface DetailedUserProfile extends UserProfile {
  [key: string]: UserProfileValue;
}

const userProfile: DetailedUserProfile = {
  username: "user123",
  email: "user123@example.com",
  premiumMember: true,
  age: 30,
  country: "India",
};

function updateProfile(profile: DetailedUserProfile, key: string, value: UserProfileValue): DetailedUserProfile {
  const updatedProfile = { ...profile };
  updatedProfile[key] = value;

  return updatedProfile;
}

const updatedProfile = updateProfile(userProfile, "premiumMember", false);

console.log(updatedProfile);
