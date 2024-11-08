const getAppUsers = 'SELECT * FROM appuser'
const getAppUserByGoogleId = 'SELECT * FROM appuser WHERE googleid = $1'
const addAppUser = 'INSERT INTO appuser (googleId, googleEmail, followingTeams, followingLeagues) VALUES ($1, $2, $3, $4)'
const removeAppUserByGoogleId = 'DELETE FROM appuser WHERE googleid = $1'
const updateAppUser = 'UPDATE appuser SET followingTeams = $1, followingLeagues = $2 WHERE googleId = $3'

module.exports = {
    getAppUsers,
    getAppUserByGoogleId,
    addAppUser,
    removeAppUserByGoogleId,
    updateAppUser,
}