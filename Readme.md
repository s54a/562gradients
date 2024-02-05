# Gradients

I Started This Project When I Had Just Started Learning Web Development

I Was Building a Web Based Based Mp3 Player and I Needed Gradient for that and after not being able to Find One I Thought of Building Something which could Generate New Gradients but Soon I Found a Few Websites [Web Gradients](https://webgradients.com) & [ui Gradients](https://uigradients.com).

Then I Got to Know That They Are Open Source Project and the Gradients (Hex Code) are Available on GitHub So Then I Started Building the Gradient Generator.

But I Didn't Knew Enough to Built One but a Today I Once Again Saw This Incompleted Project and Thought Lets Just Finish It.

So Here It is

The Project Has Nothing Special in it the Original Website Are Much Better if You Are Trying to Find Gradients.

But I Learned a Few Things About Html, Css, Js

Here Are the Things Which I Learned

1. Lets Say if You Have Set an Elements Class Using Classlist or Any Other Method and You Want the User to Get Those Styles on a Click of a Button There Isn't a Method Which Just Exports the Styles of That Class.

2. If the Child Element Gets Hight & Width From the Content Inside Them Then There is No Way Which I Found to Set the Height & Width of the Parent Element Related to Child Element.

3. As of Writing This I Just Releasised the Ways I Could Have Dealt With All the Problems

4. Both of the Problem were a Few Line Fix with JS

## Technologies Used

Built this uing Vite as a Build Tool, HTML, CSS, JS & Toastify-JS for Notification

### Cloning

```bash
git clone https://github.com/s9-g/562gradients.git

npm run dev
```

## How It Works

When the Page Loads There Are No Controls There is Only Just Background Set as a Gradient.

When You Hover in the Middle the Contorl Will Appear

The First Box Beside the "Set" Box is an Input Box Which Shows the Current Index of the Gradient From the List of 562 Gradients
You Can Input a Number From 1 to 562 to Go Up and Down in the List Quickly

The First 180 Gradients Are From Web Gradients Website and the Rest Are From Ui Gradients

Below Are Next & Prev Button

Below That There Are Copy and More Button
Copy Button Copies an Object Which Has the Information About the Gradient to the User's Clipboard and the User is Notified With Notification Using [toastify](Https://github.com/apvarun/toastify-js)

Then There is a Random Gradient Generator Button Which Generates Random Hex Numbers Using Math.random Which Are the Used as the Gradient Colors

That's All There is

# Preview

![preview Without Controls of Gradient Number 179](./assets/previewWithoutcontrols.png "Preview Without Controls of Gradient Number 179")

![preview With Controls of Gradient Number 179](./assets/previewWithcontrols.png "Preview With Controls of Gradient Number 179")

![preview of Modal](./assets/modal.png "Preview of Modal")
