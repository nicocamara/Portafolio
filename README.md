# CV showcase

### ⚡ **Project overview:**

- Get a unique URL path that includes your username with public access
- Create a professional portfolio to showcase vital information to potential employers
- Utilize two user-friendly interfaces, one for visualize and the other for upload/editing data
- Manage your profile data, including overview, education, skills, projects, experience, and downloadable CV and cover letter

<br />

### ⚙ **Requirements and setup:**

- [node and npm](https://nodejs.org/)
- [git](https://git-scm.com/)
- Set your name in git `git config --global user.name "your name"`
- Set your email in git `git config --global user.email "your email"` (verify with `cat .git/config`)
- We use prettier formatter so set it on save in your IDE as default formatter and install any additional prettier extension
- After cloning the repo, run `npm install`
- Environment variables are needed to provide firebase credentials, request them from a dev.
- Run entire app: `npm run dev`
- Build entire app: `npm run build`
- Serve entire build : `npm run serve`

<br />

### 📝 **Code conventions:**

- No debugging code in PR
- No comments in PR
- Make sure your changes are responsive and they not brake the desktop/mobile view
- We follow [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/) for our folder/files structures (except templates)
- We follow some sort of [BEM (Blocks, Elemets, Modifiers)](https://getbem.com/introduction/) css methodology, check the current classNames in an existing module.

<br />

### 🔀 **Branches and pull requests**:

- All branches are created from the latest `main` branch
- All branches are merged into `main` branch
- Branch and PR names must start with `POR-<ticketNumber>-<name>`
- Commits must start with `POR-<ticketNumber>` and be descriptive.

<br />

### 🚀 **Deploys**:

- We have both applications deployed with [render](https://dashboard.render.com/) hosting [nico's google credentials - github]
- The server url is [https://my-portfolio-server-fzmo.onrender.com](https://my-portfolio-server-fzmo.onrender.com)
- The client urls are:
  - [https://www.cvshowcase.com](https://www.cvshowcase.com)
  - [https://my-portfolio-staging.onrender.com](https://my-portfolio-staging.onrender.com)
