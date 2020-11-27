@echo off
set /p file="File : "
set /p name="Name : "
git add %file%
git commit -m "%Name%"
git push -u origin main