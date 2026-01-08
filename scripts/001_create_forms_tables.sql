-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  status TEXT DEFAULT 'new' NOT NULL
);

-- Create waste booking table
CREATE TABLE IF NOT EXISTS waste_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  ward TEXT,
  waste_type TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  status TEXT DEFAULT 'pending' NOT NULL
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE waste_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts (no authentication required for form submissions)
CREATE POLICY "Allow public contact message inserts" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public waste booking inserts" ON waste_bookings
  FOR INSERT WITH CHECK (true);

-- Allow reads for admin/dashboard access (optional)
CREATE POLICY "Allow public message reads" ON contact_messages
  FOR SELECT USING (true);

CREATE POLICY "Allow public booking reads" ON waste_bookings
  FOR SELECT USING (true);
