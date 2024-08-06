type ConfigSetting = {
  name: string;
  value: string | number | boolean;
  required: boolean;
};

const setting = {
  description: "version",
  value: "1.0.0",
};

// Conversion of type '{ description: string; value: string; }' to type 'ConfigSetting'
// may be a mistake because neither type sufficiently overlaps with the other. TS2352.

const configError = setting as ConfigSetting;

// -- Fix: `as unknown as Type` (unsafe) --
{
  const configError = setting as unknown as ConfigSetting;

  console.log(configError.name);
}
