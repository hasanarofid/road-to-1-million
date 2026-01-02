-- Insert Dummy Inventory
INSERT INTO public.inventory (name, category, stock, status) VALUES
('MacBook Air M3', 'Electronics', 10, 'available'),
('Smart Display X-20', 'Electronics', 5, 'available'),
('Logitech Mouse', 'Accessories', 50, 'available'),
('Dell Monitor 24"', 'Electronics', 0, 'out_of_stock');

-- Insert Dummy Orders
INSERT INTO public.orders (customer_name, item_name, total_amount, status) VALUES
('Budi Santoso', 'MacBook Air M3', 18500000, 'shipped'),
('Ani Wijaya', 'Smart Display X-20', 2400000, 'processing'),
('Citra Kirana', 'Smart Watch Pro', 3200000, 'pending'),
('Dedi Kurniawan', 'Laptop Pro 14', 25000000, 'delivered');

-- Insert Dummy Audit Logs
INSERT INTO public.audit_logs (action, description) VALUES
('SYSTEM_START', 'Local development database initialized'),
('SEED_DATA', 'Dummy data for inventory and orders inserted');

