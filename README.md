# 03 JavaScript: Password Generator

## Description 

The current project's aim is to use JavaScript to create a random password generator that forfills specific criteria for the user.

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Screenshots 
![](https://github.com/Charl1410/week-3-passwordGenerator/blob/master/Develop/Screenshots/Screenshot%201.png)
 
## Usage 

* When clicking the generate password the interface prompts user for a password length
* If password length entered is between 8 - 128 characters then promt moves on to what character types can be included 
* If password does not meet criteria an alter will tell user to retry
* Options for inclusion are: uppercase, lowercase, symbols and numbers
* If all are seleted 'N' an alert will tell the user at least one of the four options must be selected 

## Deployed link 



