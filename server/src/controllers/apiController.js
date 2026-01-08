const { db } = require('../config/firebase');
const supabase = require('../config/supabase');

// --- APP DATA (Firebase) ---

exports.getAppDetails = async (req, res) => {
    // Mock data for now
    res.json({
        appId: req.params.id,
        title: "Insightify Demo",
        developer: "Antigravity",
        score: 4.5
    });
};

exports.getReviews = async (req, res) => {
    // In real app, fetch from Firebase Firestore 'reviews' collection
    res.json([
        { id: 1, user: "Alice", rating: 5, text: "Great app!", sentiment: "Positive" },
        { id: 2, user: "Bob", rating: 1, text: "Crashes on startup.", sentiment: "Negative" }
    ]);
};

// --- CHAT / AI (Supabase / Vector) ---

exports.getChatHistory = async (req, res) => {
    // Fetch chat logs from Supabase
    try {
        const { data, error } = await supabase
            .from('chat_logs')
            .select('*')
            .eq('user_id', req.user?.id || 'anon'); // Assuming middleware sets user

        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.saveChatMessage = async (req, res) => {
    const { message, role } = req.body;
    // Save to Supabase
    // Logic here
    res.json({ status: 'saved' });
};
