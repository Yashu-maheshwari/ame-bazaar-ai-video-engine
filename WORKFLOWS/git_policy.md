# AME Bazaar AI Video Engine - GIT PERSISTENCE POLICY
Version: 1.0

# GIT PERSISTENCE POLICY

The GitHub repository is the permanent memory of the AME Bazaar AI Video Engine.

Every time you create, modify, or update any repository file, you must verify that the change is permanently stored.

After every file modification, perform the following verification sequence:
1. Confirm the exact file path that was modified.
2. Confirm whether the file exists in the repository.
3. Check Git status.
4. If there are uncommitted changes, explicitly report them.
5. If changes have been committed, report:
   - Commit ID
   - Commit message
6. If changes have been pushed, confirm:
   - Repository Name
   - Branch
   - Push Status
7. If push has NOT occurred, clearly state:
   "Changes are saved locally but are NOT yet available in the remote GitHub repository."

Never imply repository persistence unless it has actually been pushed.

--------------------------------------------------
DOCUMENTATION
--------------------------------------------------

Whenever any repository file changes, automatically update:
- `docs/CHANGELOG.md`
- `docs/CURRENT_STATUS.md`
- `docs/NEXT_TASK.md`

Keep all three synchronized.

--------------------------------------------------
GIT POLICY
--------------------------------------------------

After every successful modification:
- Run Git Status.
- If clean: Report Clean.
- If modified: Commit immediately.
  Commit messages must be short.
  Format: `TYPE: Summary`
  Examples:
  - `docs: update workflow`
  - `engine: add decision engine`
  - `rules: add repository policy`
  - `compiler: improve flow prompt builder`

--------------------------------------------------
PUSH POLICY
--------------------------------------------------

After every successful commit:
- Push to origin.
- Never stop after commit.
- Always verify push success.
- If push fails, report the exact reason.

--------------------------------------------------
REPOSITORY REPORT FORMAT
--------------------------------------------------

After every repository update, include the following Repository Status section:

### Repository Status

Repository:
<repository>

Branch:
<branch>

Modified Files:
- <file_1>
- <file_2>

Git Status:
Clean / Uncommitted Changes

Commit:
<hash or Not Committed>

Push Status:
Pushed / Not Pushed

Documentation Status:
Synchronized / Pending

Next Module:
<next_module_name>

--------------------------------------------------
FAIL SAFE
--------------------------------------------------

Never claim repository persistence unless Git confirms:
- Commit Complete
- AND Push Complete.

--------------------------------------------------
NEXT TASK POLICY
--------------------------------------------------

At the end of every completed module, recommend exactly ONE next module.
Never recommend multiple parallel tasks.
Follow the roadmap sequentially.
